import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native';
import 'jest-enzyme';
configure({ adapter: new Adapter() });