//store 支持的提交类型
export const PUSH_LINKS = 'pushLinks';
export const PUSH_DATA = 'pushData';
//公共路由记录 异常路由
export const ROUTE_RECORD_ERROR = 'error';
//开启本地模式 支持单组件展示直接展示
export const LOCAL_MODE = process.env.NODE_ENV === 'local';
//本地模式的路径前缀
export const LOCAL_MODE_PATH_PREFIX = 'dev';
//自动保存时间间隔
export const AUTO_SAVE_SECOND = 15;
//业务数据自动保存开关
export const SWITCH_AUTO_SAVE = true;
//控制台日志开关
export const SWITCH_CONSOLE_LOG = false;
//环节切换日志开关
export const SWITCH_ROUTE_LOG = false;
//关键字类型：页面加载时，附带的查询参数 保存在store当中
export const KEY_INIT_QUERY_PARAM = 'query';


//业务订单查询参数值
export const RESTORE_ORDER_PARAM_MARK = {
  orderId: SRV_CODE.SRV_CODE_QRY_BUSIORDER,
  packId: SRV_CODE.SRV_CODE_QRY_PACKORDER,
};
//关键字类型：场景编号 保存在store当中
export const KEY_SCENE_CODE = 'sceneCode';
//关键字类型：当前工程的页面编码
export const KEY_PAGE_CODE = 'redirect';
//关键字类型：环节数据的属性名称
export const KEY_NODE_DATA = 'data';
//关键字类型：环节场景的属性名称
export const KEY_NODE_SCENE = 'scene';
//关键字类型：环节数据的状态属性名称
export const KEY_NODE_STATE = 'state';
//关键字类型：环节数据的序号属性名称
export const KEY_NODE_QUEUE = 'queue';
//关键字类型：环节的标签属性名称
export const KEY_NODE_LABEL = 'label';
