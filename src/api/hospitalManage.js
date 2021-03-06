import http from "../http/http";

/**
 * 医院
 */

// 获取医院列表
export const HospitalInfo = (params) => {
    return http({
        url: "/amiyabg/HospitalInfo/listWithPage",
        method: "get",
        params
    });
};

// 根据类型取标签列表
export const TagInfonameList = (params) => {
    return http({
        url: "/amiyabg/TagInfo/nameList",
        method: "get",
        params
    });
};

// 添加医院
export const addHospitalInfo = (data) => {
    return http({
        url: "/amiyabg/HospitalInfo/add",
        method: "post",
        data
    });
};

// 根据医院编号获取医院信息
export const byIdGetHospitalInfo = (id) => {
    return http({
        url: `/amiyabg/HospitalInfo/byId/${id}`,
        method: "get",
    });
};

// 修改医院
export const updateHospitalInfo = (data) => {
    return http({
        url: `/amiyabg/HospitalInfo`,
        method: "put",
        data
    });
};

// 根据医院编号删除医院
export const deleteHospitalInfo = (id) => {
    return http({
        url: `/amiyabg/HospitalInfo/${id}`,
        method: "delete",
    });
};
// 获取有效的合作医院城市列表
export const cityListy = () => {
    return http({
        url: "/amiyabg/CooperativeHospitalCity/validList",
        method: "get"
    });
};

/**
 * 医院标签
 */

// 获取所有标签列表分页
export const TagInfo = (params) => {
    return http({
        url: "/amiyabg/TagInfo/listWithPage",
        method: "get",
        params
    });
};

// 添加医院标签
export const addTagInfo = (data) => {
    return http({
        url: "/amiyabg/TagInfo/add",
        method: "post",
        data
    });
};

// 根据标签编号获取标签信息
export const byIdGetTagInfo = (id) => {
    return http({
        url: `/amiyabg/TagInfo/byId/${id}`,
        method: "get",
    });
};

// 修改医院标签信息
export const updateTagInfo = (data) => {
    return http({
        url: `/amiyabg/TagInfo`,
        method: "put",
        data
    });
};

// 删除医院标签
export const deleteTagInfo = (id) => {
    return http({
        url: `/amiyabg/TagInfo/${id}`,
        method: "delete",
    });
};

/**
 * 医生
 */

// 获取医生信息列表 分页
export const Doctor = (params) => {
    return http({
        url: "/amiyabg/Doctor/listWithPage",
        method: "get",
        params
    });
};

// 获取医院名称列表
export const HospitalInfonameList = () => {
    return http({
        url: "/amiyabg/HospitalInfo/nameList",
        method: "get",
    });
};

// 添加医生信息
export const addDoctor = (data) => {
    return http({
        url: "/amiyabg/Doctor",
        method: "post",
        data
    });
};

// 根据医生编号获取医生信息
export const byIdGetDoctor = (id) => {
    return http({
        url: `/amiyabg/Doctor/byId/${id}`,
        method: "get",
    });
};

// 修改医生信息
export const updateDoctor = (data) => {
    return http({
        url: `/amiyabg/Doctor`,
        method: "put",
        data
    });
};

// 删除医生信息
export const deleteDoctor = (id) => {
    return http({
        url: `/amiyabg/Doctor/${id}`,
        method: "delete",
    });
};

/**
 * 医院推荐
 */

// 获取医院推荐列表 分页
export const RecommendHospital = (params) => {
    return http({
        url: "/amiyabg/RecommendHospital/listWithPage",
        method: "get",
        params
    });
};

// 添加医院推荐
export const addRecommendHospital = (data) => {
    return http({
        url: "/amiyabg/RecommendHospital",
        method: "post",
        data
    });
};

// 根据编号获取医院推荐信息
export const byIdGetRecommendHospital = (id) => {
    return http({
        url: `/amiyabg/RecommendHospital/byId/${id}`,
        method: "get",
    });
};

// 修改医院推荐信息
export const updateRecommendHospital = (data) => {
    return http({
        url: `/amiyabg/RecommendHospital`,
        method: "put",
        data
    });
};

// 删除医院推荐信息
export const deleteRecommendHospital = (id) => {
    return http({
        url: `/amiyabg/RecommendHospital/${id}`,
        method: "delete",
    });
};

/**
 * 医院可预约人数
 */

// 获取医院可预约人数列表 分页
export const HospitalAppointmentQuantity = (params) => {
    return http({
        url: "/amiyabg/HospitalAppointmentQuantity/listWithPage",
        method: "get",
        params
    });
};

// 添加医院可预约人数
export const addHospitalAppointmentQuantity = (data) => {
    return http({
        url: "/amiyabg/HospitalAppointmentQuantity",
        method: "post",
        data
    });
};

// 根据编号获取可预约人数
export const byIdGetHospitalAppointmentQuantity = (id) => {
    return http({
        url: `/amiyabg/HospitalAppointmentQuantity/byId/${id}`,
        method: "get",
    });
};

// 修改医院可预约人数
export const updateHospitalAppointmentQuantity = (data) => {
    return http({
        url: `/amiyabg/HospitalAppointmentQuantity`,
        method: "put",
        data
    });
};

// 删除医院可预约人数
export const deleteHospitalAppointmentQuantity = (id) => {
    return http({
        url: `/amiyabg/HospitalAppointmentQuantity/${id}`,
        method: "delete",
    });
};

/**
 * 合作医院城市列表
 */

// 获取合作医院城市列表（分页）
export const getCooperativeHospitalCity = (params) => {
    return http({
        url: "/amiyabg/CooperativeHospitalCity/listWithPage",
        method: "get",
        params
    });
};

// 添加合作医院城市 post
export const addCooperativeHospitalCity = (data) => {
    return http({
        url: "/amiyabg/CooperativeHospitalCity",
        method: "post",
        data
    });
};

// 根据编号获取合作医院城市
export const byIdCooperativeHospitalCity = (id) => {
    return http({
        url: `/amiyabg/CooperativeHospitalCity/byId/${id}`,
        method: "get",
    });
};

// 修改合作医院城市 put
export const updateCooperativeHospitalCity = (data) => {
    return http({
        url: `/amiyabg/CooperativeHospitalCity`,
        method: "put",
        data
    });
};

// 根据编号删除合作医院城市
export const deleteCooperativeHospitalCity = (id) => {
    return http({
        url: `/amiyabg/CooperativeHospitalCity/${id}`,
        method: "delete",
    });
};
// 医院端获取医院资料
export const byIdHospitalInfo = (id) => {
    return http({
        url: `/amiyabg/HospitalInfo/detailsById/${id}`,
        method: "get",
    });
};
// 医院端修改医院信息
export const UpdateHospitalInfo = (data) => {
    return http({
        url: `/amiyabg/HospitalInfo/HospitalUpdate`,
        method: "put",
        data
    });
};
/**
 * 医院资料审核
 */
// 获取医院资料审核情况列表
export const hospitalCheckWithPage = (params) => {
    return http({
        url: `/amiyabg/HospitalInfo/hospitalCheckWithPage`,
        method: "get",
        params
    });
};
//审核医院资料
export const hospitalInfoCheck = (data) => {
    return http({
        url: `/amiyabg/HospitalInfo/hospitalInfoCheck`,
        method: "put",
        data
    });
};
// 获取资料审核通过医院名称列表
export const checkPassedNameList = (params) => {
    return http({
        url: "/amiyabg/HospitalInfo/checkPassedNameList",
        method: "get",
        params
    });
};
// 根据编号获取医院资料
export const detailsById = (id) => {
    return http({
        url: `/amiyabg/HospitalInfo/detailsById/${id}`,
        method: "get",
    });
};