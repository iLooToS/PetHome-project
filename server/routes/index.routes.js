const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const tokensRoutes = require('./api/tokens.routes');
const usersRoutes = require('./api/users.routes');
const sheltersRoutes = require('./api/shelter.routes');
const petsRoutes = require('./api/pet.routes');
const postsRouter = require('./api/posts.routes');
const chatsRouter = require('./api/chats.routes');
const adminRoutes = require('./api/admin.routes');
const commentsRoutes = require('./api/comments.routes');


router.use('/auth', authRoutes);
router.use('/chats', chatsRouter);
router.use('/tokens', tokensRoutes);
router.use('/users', usersRoutes);
router.use('/shelters', sheltersRoutes);
router.use('/pets', petsRoutes);
router.use('/posts', postsRouter);
router.use('/admin', adminRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
