import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxGroupItem_SelectedFals } from '../CheckboxGroupItem_SelectedFals/CheckboxGroupItem_SelectedFals.js';
import { CheckboxGroupItem_SelectedTrue } from '../CheckboxGroupItem_SelectedTrue/CheckboxGroupItem_SelectedTrue.js';
import classes from './CheckboxGroup_SizeSmTypeCheckb.module.css';

interface Props {
  className?: string;
  classes?: {
    checkboxGroupItem?: string;
    root?: string;
  };
  hide?: {
    input?: boolean;
    textAndSubtext?: boolean;
    input2?: boolean;
    textAndSubtext2?: boolean;
    input3?: boolean;
    textAndSubtext3?: boolean;
    input4?: boolean;
    textAndSubtext4?: boolean;
    input5?: boolean;
    textAndSubtext5?: boolean;
  };
  text?: {
    includesUpTo10Users20GBIndivid?: ReactNode;
    includesUpTo10Users20GBIndivid2?: ReactNode;
    includesUpTo10Users20GBIndivid3?: ReactNode;
    includesUpTo10Users20GBIndivid4?: ReactNode;
    includesUpTo10Users20GBIndivid5?: ReactNode;
  };
}
/* @figmaId 1142:91072 */
export const CheckboxGroup_SizeSmTypeCheckb: FC<Props> = memo(function CheckboxGroup_SizeSmTypeCheckb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <CheckboxGroupItem_SelectedTrue
        className={`${props.classes?.checkboxGroupItem || ''} ${classes.checkboxGroupItem}`}
        hide={{
          input: props.hide?.input,
          textAndSubtext: props.hide?.textAndSubtext,
        }}
        text={{
          includesUpTo10Users20GBIndivid: props.text?.includesUpTo10Users20GBIndivid,
        }}
      />
      <CheckboxGroupItem_SelectedFals
        className={classes.checkboxGroupItem2}
        hide={{
          input: props.hide?.input2,
          textAndSubtext: props.hide?.textAndSubtext2,
        }}
        text={{
          text: <div className={classes.text}>Business plan</div>,
          subtext: <div className={classes.subtext}>$20/month</div>,
          includesUpTo10Users20GBIndivid: props.text?.includesUpTo10Users20GBIndivid2,
        }}
      />
      <CheckboxGroupItem_SelectedFals
        className={classes.checkboxGroupItem3}
        hide={{
          input: props.hide?.input3,
          textAndSubtext: props.hide?.textAndSubtext3,
        }}
        text={{
          text: <div className={classes.text2}>Enterprise plan</div>,
          subtext: <div className={classes.subtext2}>$40/month</div>,
          includesUpTo10Users20GBIndivid: props.text?.includesUpTo10Users20GBIndivid3,
        }}
      />
      <CheckboxGroupItem_SelectedFals
        className={classes.checkboxGroupItem4}
        hide={{
          input: props.hide?.input4,
          textAndSubtext: props.hide?.textAndSubtext4,
        }}
        text={{
          text: <div className={classes.text3}>Ultimate plan</div>,
          subtext: <div className={classes.subtext3}>$60/month</div>,
          includesUpTo10Users20GBIndivid: props.text?.includesUpTo10Users20GBIndivid4,
        }}
      />
      <CheckboxGroupItem_SelectedFals
        className={classes.checkboxGroupItem5}
        hide={{
          input: props.hide?.input5,
          textAndSubtext: props.hide?.textAndSubtext5,
        }}
        text={{
          text: <div className={classes.text4}>Secret plan</div>,
          subtext: <div className={classes.subtext4}>$80/month</div>,
          includesUpTo10Users20GBIndivid: props.text?.includesUpTo10Users20GBIndivid5,
        }}
      />
    </div>
  );
});
