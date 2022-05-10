package com.course.api.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.course.api.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    /**
     * 根据 entity 条件，查询全部记录（并翻页）
     * @param page
     * @param userWrapper
     * @return
     */
    IPage<User> selectPageVo(IPage<User> page, @Param(Constants.WRAPPER)Wrapper<User> userWrapper);
}
