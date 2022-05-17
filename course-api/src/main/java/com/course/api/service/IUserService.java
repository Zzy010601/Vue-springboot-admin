package com.course.api.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.course.api.entity.User;

public interface IUserService extends IService<User> {
    IPage<User> Page(IPage<User> userIPage, Wrapper<User> queryWrapper);

}
