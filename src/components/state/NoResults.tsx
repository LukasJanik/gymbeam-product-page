import { FC } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CommonState from './Common';

const NoResultsState: FC = () => (
    <CommonState label="Zoznam výsledkov je prázdny" Icon={WarningAmberIcon} />
);

export default NoResultsState;
