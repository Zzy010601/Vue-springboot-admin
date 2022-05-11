package com.course.api.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("user")
public class User {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String username;
    private String account;
    private String password;
    private boolean sex;
    private String cell;
    private String email;
    private int userType;
    private boolean isAdmin;
    private String courseIds;
}
