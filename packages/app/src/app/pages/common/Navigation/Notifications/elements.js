import styled, { css } from 'styled-components';
import delayEffect from 'common/utils/animation/delay-effect';

export const Container = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  overflow: hidden;
  box-sizing: border-box;
  right: 0;
  text-align: left;
  line-height: 1.6;
  width: 358px;
  z-index: 10;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;

  border-radius: 2px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

  background-color: ${props => props.theme.background};
`;

export const NotificationsContainer = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

export const NoNotifications = styled.div`
  padding: 0.75rem 1rem;
`;

export const Loading = styled.div`
  ${delayEffect(1)};

  padding: 0.75 1rem;
  min-height: 100px;
`;

export const Title = styled.div`
  color: white;
  padding: 0.75rem 1rem;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

export const NotificationContainer = styled.div`
  transition: 0.3s ease border-color;
  padding: 0.75rem 1rem;

  border-left: 2px solid transparent;

  ${props =>
    props.read
      ? css`
          border-color: rgba(0, 0, 0, 0.3);
        `
      : css`
          border-color: ${props.theme.secondary.clearer(0.2)()};

          &:hover {
            border-color: ${props.theme.secondary()};
          }
        `};
`;