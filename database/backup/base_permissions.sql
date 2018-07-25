INSERT INTO `base_permissions` VALUES (1, 0, 'sysconfig.index', 'ios-paper', 1, '系统管理', '系统管理菜单', '2018-7-4 10:06:52', '2018-7-4 10:06:52', 255);
INSERT INTO `base_permissions` VALUES (2, 1, 'sysconfig.per', 'ios-paper', 1, '权限管理', '权限管理菜单', '2018-7-4 10:06:52', '2018-7-4 10:06:52', 255);
INSERT INTO `base_permissions` VALUES (3, 2, 'sysconfig.permission.index', 'ios-paper', 1, '权限&菜单', '权限&菜单', '2018-7-4 10:06:52', '2018-7-4 10:06:52', 255);
INSERT INTO `base_permissions` VALUES (4, 2, 'sysconfig.role.index', 'compose', 1, '角色管理', '角色管理菜单', '2018-7-4 10:06:52', '2018-7-4 10:06:52', 255);
INSERT INTO `base_permissions` VALUES (5, 2, 'sysconfig.admin.index', 'compose', 1, '用户管理', '用户管理菜单', '2018-7-4 10:06:52', '2018-7-4 10:06:52', 255);
INSERT INTO `base_permissions` VALUES (6, 5, 'admin.index', NULL, 0, '获取后台用户列表', NULL, '2018-7-4 10:25:03', '2018-7-4 10:25:03', 255);
INSERT INTO `base_permissions` VALUES (7, 5, 'admin.store', NULL, 0, '添加后台用户', NULL, '2018-7-4 10:25:21', '2018-7-4 10:25:21', 255);
INSERT INTO `base_permissions` VALUES (8, 5, 'admin.destroy', NULL, 0, '删除后台用户', NULL, '2018-7-4 10:25:33', '2018-7-4 10:25:33', 255);
INSERT INTO `base_permissions` VALUES (9, 5, 'admin.update', NULL, 0, '更新后台用户', NULL, '2018-7-4 10:25:49', '2018-7-4 10:25:49', 255);
INSERT INTO `base_permissions` VALUES (10, 5, 'admin.show', NULL, 0, '查看某个后台用户', NULL, '2018-7-4 10:26:26', '2018-7-4 10:26:38', 255);
INSERT INTO `base_permissions` VALUES (11, 3, 'permission.index', NULL, 0, '获取权限&菜单列表', NULL, '2018-7-4 10:27:23', '2018-7-4 10:27:23', 255);
INSERT INTO `base_permissions` VALUES (12, 3, 'permission.store', NULL, 0, '添加后台权限&菜单', NULL, '2018-7-4 10:27:51', '2018-7-4 10:27:51', 255);
INSERT INTO `base_permissions` VALUES (13, 3, 'permission.show', NULL, 0, '查看某个后台权限&菜单', NULL, '2018-7-4 10:28:22', '2018-7-4 10:28:22', 255);
INSERT INTO `base_permissions` VALUES (14, 3, 'permission.destroy', NULL, 0, '删除后台权限&菜单', NULL, '2018-7-4 10:28:48', '2018-7-4 10:28:48', 255);
INSERT INTO `base_permissions` VALUES (15, 3, 'permission.update', NULL, 0, '更新后台权限&菜单', NULL, '2018-7-4 10:29:10', '2018-7-4 10:29:10', 255);
INSERT INTO `base_permissions` VALUES (16, 4, 'role.index', NULL, 0, '后台角色列表', NULL, '2018-7-4 10:29:27', '2018-7-4 10:29:27', 255);
INSERT INTO `base_permissions` VALUES (17, 4, 'role.store', NULL, 0, '添加后台角色', NULL, '2018-7-4 10:29:49', '2018-7-4 10:29:49', 255);
INSERT INTO `base_permissions` VALUES (18, 4, 'role.show', NULL, 0, '查看某个角色', NULL, '2018-7-4 10:30:34', '2018-7-4 10:30:34', 255);
INSERT INTO `base_permissions` VALUES (19, 4, 'role.update', NULL, 0, '更新后台角色', NULL, '2018-7-4 10:30:47', '2018-7-4 10:30:47', 255);
INSERT INTO `base_permissions` VALUES (20, 4, 'role.destroy', NULL, 0, '删除后台角色', NULL, '2018-7-4 10:31:04', '2018-7-4 10:31:04', 255);
INSERT INTO `base_permissions` VALUES (21, 4, 'role.permission.index', NULL, 0, '查看角色权限', NULL, '2018-7-4 10:31:31', '2018-7-4 10:31:58', 255);
INSERT INTO `base_permissions` VALUES (22, 4, 'role.permission.store', NULL, 0, '分配角色权限', NULL, '2018-7-4 10:31:50', '2018-7-4 10:31:50', 255);
INSERT INTO `base_permissions` VALUES (23, 1, 'sysconfig.logs', 'logs', 1, '日志管理', NULL, '2018-7-4 10:32:35', '2018-7-4 10:34:10', 255);
INSERT INTO `base_permissions` VALUES (24, 23, 'sysconfig.logs.index', 'lgos.index', 1, '操作日志', NULL, '2018-7-4 10:33:58', '2018-7-4 10:34:58', 255);
INSERT INTO `base_permissions` VALUES (25, 24, 'logs.index', NULL, 0, '获取日志列表', NULL, '2018-7-4 10:35:22', '2018-7-4 10:35:22', 255);
INSERT INTO `base_permissions` VALUES (26, 0, 'admin.sellers', 'qr-scanner', 1, '店铺管理', NULL, '2018-7-19 16:36:09', '2018-7-24 21:36:16', 2);
INSERT INTO `base_permissions` VALUES (28, 26, 'admin.sellers.index', 'sellers', 1, '店铺列表', NULL, '2018-7-19 17:28:05', '2018-7-24 21:36:20', 1);
INSERT INTO `base_permissions` VALUES (29, 26, 'admin.sellers.auditing', 'auditing', 1, '待审核列表', NULL, '2018-7-25 16:14:16', '2018-7-25 16:14:16', 2);
