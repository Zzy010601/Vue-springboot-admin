package com.course.api.service.Impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.course.api.entity.User;
import com.course.api.mapper.UserMapper;
import com.course.api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public IPage<User> Page(IPage<User> userIPage, Wrapper<User> queryWrapper) {
        return userMapper.selectPage(userIPage, queryWrapper);
    }
}
