import { FC } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import CommonState from './Common';

const Error: FC = () => <CommonState label="Nastala chyba" Icon={ErrorIcon} />;

export default Error;
