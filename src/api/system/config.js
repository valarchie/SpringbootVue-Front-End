import request from '@/utils/request';

// 查询参数列表
export function listConfig(query) {
  return request({
    url: '/system/config/list',
    method: 'get',
    params: query,
  });
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: `/system/config/${configId}`,
    method: 'get',
  });
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType) {
  return request({
    url: `/system/config/dict/${dictType}`,
    method: 'get',
  });
}

// 根据参数键名查询参数值 TODO 弃用了
export function getConfigKey(configKey) {
  return request({
    url: `/system/config/configKey/${configKey}`,
    method: 'get',
  });
}

// 新增参数配置
export function addConfig(data) {
  return request({
    url: '/system/config',
    method: 'post',
    data,
  });
}

// 修改参数配置
export function updateConfig(data) {
  return request({
    url: '/system/config',
    method: 'put',
    data,
  });
}

// 删除参数配置
export function delConfig(configId) {
  return request({
    url: `/system/config/${configId}`,
    method: 'delete',
  });
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    method: 'delete',
  });
}
