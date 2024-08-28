package spring.verzel_plus.model;

public class ResponseMsg {
    private String message;
    private boolean success;

    public ResponseMsg(String message, boolean success) {
        this.message = message;
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public boolean isSuccess() {
        return success;
    }
}