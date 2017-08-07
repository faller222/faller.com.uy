package uy.com.faller.principal.controllers;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(displayName = "UtilController", urlPatterns = {"/util"}, loadOnStartup = 0)
public class UtilController extends HttpServlet {

    @java.lang.Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        final String opt = req.getParameter("opt");
        PrintWriter writer = resp.getWriter();
        if ("date".equals(opt)) {
            writer.write("tiempo");
        }else{
            writer.write("none");
        }
        writer.close();

    }

}
