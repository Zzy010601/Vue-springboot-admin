package com.course.api.config.Result;

import lombok.Data;

@Data
public class Result<T> {
    private Integer code;
    private String msg;
    private T data;
    private boolean success;

    public Result() {}

    public Result(Integer code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        this.success = Results.SUCCESS.intValue() == code.intValue();
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("{");
        builder.append("'code':").append(code).append(",");
        builder.append("'msg':").append(msg).append(",");
        builder.append("'success':").append(success).append(",");
        builder.append("}");
        return builder.toString();
    }
}

