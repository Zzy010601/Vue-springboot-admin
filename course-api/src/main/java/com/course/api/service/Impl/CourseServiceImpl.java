package com.course.api.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.course.api.entity.Course;
import com.course.api.mapper.CourseMapper;
import com.course.api.service.ICourseService;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl extends ServiceImpl<CourseMapper, Course> implements ICourseService {

}
