import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickMetaData } from './ReactOnClick/router-data';
import { ReactOnChangekMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickMetaData,
  ReactOnChangekMetaData,
  ReactIfStatementsMetaData,
  ReactGuessNumberMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
