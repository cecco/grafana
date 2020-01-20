// Libraries
import React, { memo } from 'react';

// Types
import { FormLabel } from '@grafana/ui';

export interface PromExploreExtraFieldProps {
  label: string;
  onChangeFunc: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onKeyDownFunc: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}

export const PromExploreExtraField = memo(function PromExploreExtraField(props: PromExploreExtraFieldProps) {
  const { label, onChangeFunc, onKeyDownFunc, value } = props;

  return (
    <div className="gf-form-inline explore-input--ml">
      <div className="gf-form">
        <FormLabel width={4}>{label}</FormLabel>
        <input
          type={'text'}
          className="gf-form-input width-4"
          placeholder={'auto'}
          onChange={onChangeFunc}
          onKeyDown={onKeyDownFunc}
          value={value}
        />
      </div>
    </div>
  );
});

export default PromExploreExtraField;
