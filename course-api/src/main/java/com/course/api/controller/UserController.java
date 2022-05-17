package com.course.api.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.course.api.config.Result.Result;
import com.course.api.config.Result.Results;
import com.course.api.entity.User;
import com.course.api.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@ResponseBody
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    /**
     * 用户登录
     * @param user
     * @return
     */
    @PostMapping("/login")
    public Result login(@RequestBody User user) {
        String account = user.getAccount();
        String password = user.getPassword();
        System.out.println(account);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("account", account);
        User userVo = userService.getOne(queryWrapper);
        // 登陆失败
        if (userVo == null) {
            return Results.failure("不存在此用户");
        } else if (!userVo.getPassword().equals(password)) {
            return Results.failure("账号密码输入错误");
        }
        //登陆成功
        StpUtil.login(userVo.getId());
        System.out.println(StpUtil.getTokenInfo());
        return Results.success();
    }

    /**
     * 获取用户列表
     * @param page
     * @param pageSize
     * @param username
     * @param userType
     * @return
     */
    @GetMapping("/getUserList")
    public Result userList(@RequestParam int page,
                           @RequestParam int pageSize,
                           @RequestParam(required = false) String username,
                           @RequestParam(defaultValue = "-1") int userType) {
        IPage<User> userPage = new Page<>(page, pageSize);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        if (StrUtil.isNotBlank(username)) {
            queryWrapper.like("username", username);
        }
        if (userType > -1) {
            queryWrapper.eq("user_type", userType);
        }
        return Results.success(userService.Page(userPage, queryWrapper));
    }

    /**
     * 添加用户信息
     * @param user
     * @return
     */
    @PostMapping("/add")
    public Result add(@RequestBody User user) {
        if (userService.save(user)) return Results.success();
        else return Results.failure("添加失败");
    }

    /**
     * 修改用户信息
     * @param user
     * @return
     */
    @PutMapping("/update")
    public Result update(@RequestBody User user) {
        if (userService.updateById(user)) return Results.success();
        else return Results.failure("修改失败");
    }

    /**
     * 删除用户信息
     * @param id
     * @return
     */
    @DeleteMapping("/delete/{id}")
    public Result remove(@PathVariable("id") Long id) {
        if (userService.removeById(id)) return Results.success();
        else return Results.failure("删除失败");
    }

    /**
     * 根据id获取老师信息
     * @param id
     * @return
     */
    @GetMapping("/getTeacher")
    public User getTeacher(@RequestParam Long id) {
        return userService.getById(id);
    }
}
