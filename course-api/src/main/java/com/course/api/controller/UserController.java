package com.course.api.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.course.api.config.Result.Result;
import com.course.api.config.Result.Results;
import com.course.api.entity.User;
import com.course.api.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    /**
     * 获取用户列表
     * @param page
     * @param pageSize
     * @param id
     * @return
     */
    @GetMapping("/getUserList")
    public Result userList(@RequestParam int page,
                           @RequestParam int pageSize,
                           @RequestParam(required = false) Long id) {
        IPage<User> userPage = new Page<>(page, pageSize);
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("id", id);
        return Results.success(userService.selectPage(userPage, queryWrapper));
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
     * @param user
     * @return
     */
    @DeleteMapping("/delete")
    public Result remove(@RequestBody User user) {
        if (userService.removeById(user.getId())) return Results.success();
        else return Results.failure("删除失败");
    }
}
