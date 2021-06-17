import * as React from 'react';
import { TypeElemDesc, TypeElement } from '@idraw/types';
import { StudioContext } from './../../context';
import { getElement } from './../../util/data';
import eventHub from './../../util/event-hub';
import { RectDescForm } from './rect';
import { TextDescForm } from './text';

const { useContext, useCallback } = React;

const supportElemList = ['rect', 'text']; // TODO 

type TypeProps = {
  maxHeight?: number,
}

export const Description = (props: TypeProps) => {
  const context = useContext(StudioContext);
  const { data, selectedElementUUID } = context;
  const elem: TypeElement<keyof TypeElemDesc> = getElement(data, selectedElementUUID);

  const onChangeElementDesc = useCallback((desc: TypeElemDesc[keyof TypeElemDesc]) => {
    if (elem) {
      elem.desc = { ...elem.desc, ...desc };
      eventHub.trigger('studioUpdateElement', elem);
    }
  }, [selectedElementUUID]);

  const style: React.HTMLAttributes<HTMLDivElement>['style'] = {};
  if (props.maxHeight > 0) {
    style.maxHeight = props.maxHeight;
    style.height = props.maxHeight;
  }

  return (
    <div className="idraw-studio-mod-desc" style={style}>
      {supportElemList.includes(elem?.type) ? (
        <>
          {elem?.type === 'rect' && (
            <RectDescForm
              elem={elem as TypeElement<'rect'>}
              onChange={onChangeElementDesc}
            />
          )}
          {elem?.type === 'text' && (
            <TextDescForm
              elem={elem as TypeElement<'text'>}
              onChange={onChangeElementDesc}
            />
          )}
        </>
      ) : (
        <div className="no-select-data">No Description</div>
      )}
    </div>
  )
}

