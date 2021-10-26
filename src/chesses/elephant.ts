import type { 不可能, 是 } from '../utils'
import type { 红色, 黑色 } from '../color'
import type { 零, 二, 四, 五, 六, 七, 八, 九 } from '../integer'
import type { 棋子坐标 } from '../position'

type 黑象的可能位置 =
  | 棋子坐标<零, 二>
  | 棋子坐标<二, 零>
  | 棋子坐标<二, 四>
  | 棋子坐标<四, 二>
  | 棋子坐标<六, 零>
  | 棋子坐标<六, 四>
  | 棋子坐标<八, 二>

type 红象的可能位置 =
  | 棋子坐标<零, 七>
  | 棋子坐标<二, 五>
  | 棋子坐标<二, 九>
  | 棋子坐标<四, 七>
  | 棋子坐标<六, 五>
  | 棋子坐标<六, 九>
  | 棋子坐标<八, 七>

type 黑象可以放在这里吗<位置> = 位置 extends 黑象的可能位置 ? 是 : 不可能
type 红象可以放在这里吗<位置> = 位置 extends 红象的可能位置 ? 是 : 不可能

export type 象可以放在这里吗<颜色, 位置> = 颜色 extends 红色
  ? 红象可以放在这里吗<位置>
  : 颜色 extends 黑色
  ? 黑象可以放在这里吗<位置>
  : 不可能

/**
 * 测试代码
 */
type 黑象00 = 象可以放在这里吗<黑色, 棋子坐标<零, 零>>
type 红象00 = 象可以放在这里吗<红色, 棋子坐标<零, 零>>
type 黑象60 = 象可以放在这里吗<黑色, 棋子坐标<六, 零>>
type 红象60 = 象可以放在这里吗<红色, 棋子坐标<六, 零>>
type 黑象47 = 象可以放在这里吗<黑色, 棋子坐标<四, 七>>
type 红象47 = 象可以放在这里吗<红色, 棋子坐标<四, 七>>