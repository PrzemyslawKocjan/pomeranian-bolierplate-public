import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { TextFundamentsRouterMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
//import { SelectorsAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';
import { GoogleFontsRouterMetaData } from './GoogleFonts/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { CssFilterRouterMetaData } from './CssFilter/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';
import { BoxModelRouterMetaData } from './BoxModel/router-data';
import { HTMLTablesRouterMetaData } from './HTMLTables/router-data';
import { FloatsAndPositioningRouterMetaData } from './FloatsAndPositioning/router-data';
import { ArrayRenderToTableRouterMetaData } from './ArrayRenderToTable/router-data';


export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorsAndCascadeRouterMetaData,
  TextFundamentsRouterMetaData,
  GoogleFontsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  CssFilterRouterMetaData,
  MediaFilesRouterMetaData,
  BoxModelRouterMetaData,
  HTMLTablesRouterMetaData,
  FloatsAndPositioningRouterMetaData,
  ArrayRenderToTableRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
