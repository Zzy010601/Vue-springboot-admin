package com.course.api.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.course.api.config.Result.Result;
import com.course.api.config.Result.Results;
import com.course.api.entity.Course;
import com.course.api.service.Impl.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseServiceImpl courseService;

    @GetMapping("/getCourseList")
    public Result getCourseList(@RequestParam int page,
                                @RequestParam int pageSize,
                                @RequestParam(defaultValue = "-1") Long id) {
        IPage<Course> courseIPage = new Page<>(page, pageSize);
        QueryWrapper<Course> queryWrapper = new QueryWrapper<>();
        if (id > 0) {
            queryWrapper.eq("id", id);
        }
        return Results.success(courseService.page(courseIPage, queryWrapper));
    }

    @PostMapping("/add")
    public Result add(@RequestBody Course course) {
        if (courseService.save(course)) return Results.success();
        else return Results.failure("添加失败");
    }

    @PutMapping("update")
    public Result update(@RequestBody Course course) {
        if (courseService.updateById(course)) return Results.success();
        else return Results.failure("编辑失败");
    }

    @DeleteMapping("delete/{id}")
    public Result remove(@PathVariable(value = "id") Long id) {
        if (courseService.removeById(id)) return Results.success();
        else return Results.failure("删除失败");
    }
}
