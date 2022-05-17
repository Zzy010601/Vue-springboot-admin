package com.course.api.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.course.api.entity.Course;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CourseMapper extends BaseMapper<Course>  {
}
