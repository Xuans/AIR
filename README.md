# README

> 开发AWEB 项目

1. 右键点击 --> `初始化AWEB项目`

2. 安装下载依赖包

    ```sh
     npm install 
   ```
   
3. 初始化项目并监听文件 （文件改动会实时监听无需编译）

   ```sh
      npm run watch  
   ```
4. 启动前端服务器 

   ```sh
      npm run server  
   ```
    以上步骤完成后就可以开发一个AWEB项目啦~~~~
    
 
------------------------------------------
> 项目添加第三方依赖
   
   在项目的node_modules/@aweb-lib新建第三方文件
   
 - css依赖 




> 重新初始化项目 (会把项目还原为初始状态，一般用于新建项目，如项目已经修改过了，谨慎操作)
  
   ```sh
      npm run init  
   ```


> 初始化命令 列表 (需更新或初始化一部分内容时操作)
   - 初始化插件    
   
        ```sh
            npm run initplugins
        ```
   - 初始化WEB文件的字体样式   
   
        ```sh
             npm run initaweb
        ```
   - 初始化的编辑器（页面模型，国际化，菜单配置，主题配置）
      
        ```sh
             npm run initeditor
        ```
   - 初始化bootloaderTemplate
   
        ```sh
             npm run initbootloaderTemplate
        ```
   - 初始化组件 
   
        ```sh
            npm run initcomponents
        ```
   - 初始化aweb插件
      
        ```sh
            npm run initlib
        ```
   - 初始化webpackConfig 
   
        ```sh
            npm run initwebpackConfig
        ```   
   - 初始化字典 
   
        ```sh
            npm run initdict
        ```  
   - 初始化java文件
   
        ```sh
            npm run initjava
        ```  
   - 初始化maven配置
        ```sh
            npm run initpomX
        ```  
   - 初始化资源配置 
        ```sh
            npm run initresources
        ```  


> 单独编译的命令 列表
   - 全量编译
        ```sh
            npm run compile
        ```  
   -  编译组件 
        ```sh
            npm run widget
        ```  
   -  编译页面模型 
   
        ```sh
            npm run pageModule
        ```  
   -  编译国际化文件
   
         ```sh
             npm run nsl
         ```  
   -  编译插件 
        ```sh
            npm run plugins
        ```  


> 监听命令
   - 监听源文件，若有任何更改，会编译到对应的位置,无须再执行编译的命令
      ```sh
          npm run plugins
      ``` 

<!--日志 Start--> 

 <!--日志 End-->