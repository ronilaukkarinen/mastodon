import { FormattedMessage } from 'react-intl';

import BarChart4BarsIcon from '@/material-icons/400-20px/bar_chart_4_bars.svg?react';
import type { NotificationGroupPoll } from 'mastodon/models/notification_group';

import { NotificationWithStatus } from './notification_with_status';

const labelRenderer = () => (
  <FormattedMessage
    id='notification.poll'
    defaultMessage='A poll you have voted in has ended'
  />
);

export const NotificationPoll: React.FC<{
  notification: NotificationGroupPoll;
}> = ({ notification }) => (
  <NotificationWithStatus
    type='poll'
    icon={BarChart4BarsIcon}
    accountIds={notification.sampleAccountsIds}
    count={notification.notifications_count}
    statusId={notification.statusId}
    labelRenderer={labelRenderer}
  />
);
