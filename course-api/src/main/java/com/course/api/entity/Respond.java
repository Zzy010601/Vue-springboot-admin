package com.course.api.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("respond")
public class Respond {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String respondContent;
    private Long postId;
}
