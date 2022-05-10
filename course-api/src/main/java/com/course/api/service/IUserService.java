package com.course.api.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.course.api.entity.User;

public interface IUserService extends IService<User> {
    /**
     * IUserService分页接口
     * @param page
     * @param userWrapper
     * @return
     */
    IPage<User> selectPage(IPage<User> page, Wrapper<User> userWrapper);
}
