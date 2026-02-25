import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MainController::home
* @see app/Http/Controllers/MainController.php:9
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::dashboard
* @see app/Http/Controllers/DashboardController.php:11
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
export const notepad = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notepad.url(options),
    method: 'get',
})

notepad.definition = {
    methods: ["get","head"],
    url: '/notepad',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
notepad.url = (options?: RouteQueryOptions) => {
    return notepad.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
notepad.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notepad.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
notepad.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notepad.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
const notepadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notepad.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
notepadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notepad.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::notepad
* @see app/Http/Controllers/NotepadController.php:19
* @route '/notepad'
*/
notepadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: notepad.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

notepad.form = notepadForm

/**
* @see \App\Http\Controllers\NotepadController::getFolders
* @see app/Http/Controllers/NotepadController.php:24
* @route '/notepad/folders'
*/
export const getFolders = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getFolders.url(options),
    method: 'post',
})

getFolders.definition = {
    methods: ["post"],
    url: '/notepad/folders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotepadController::getFolders
* @see app/Http/Controllers/NotepadController.php:24
* @route '/notepad/folders'
*/
getFolders.url = (options?: RouteQueryOptions) => {
    return getFolders.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::getFolders
* @see app/Http/Controllers/NotepadController.php:24
* @route '/notepad/folders'
*/
getFolders.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getFolders.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::getFolders
* @see app/Http/Controllers/NotepadController.php:24
* @route '/notepad/folders'
*/
const getFoldersForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getFolders.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::getFolders
* @see app/Http/Controllers/NotepadController.php:24
* @route '/notepad/folders'
*/
getFoldersForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: getFolders.url(options),
    method: 'post',
})

getFolders.form = getFoldersForm

/**
* @see \App\Http\Controllers\NotepadController::saveFolder
* @see app/Http/Controllers/NotepadController.php:38
* @route '/notepad/folder'
*/
export const saveFolder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveFolder.url(options),
    method: 'post',
})

saveFolder.definition = {
    methods: ["post"],
    url: '/notepad/folder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotepadController::saveFolder
* @see app/Http/Controllers/NotepadController.php:38
* @route '/notepad/folder'
*/
saveFolder.url = (options?: RouteQueryOptions) => {
    return saveFolder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::saveFolder
* @see app/Http/Controllers/NotepadController.php:38
* @route '/notepad/folder'
*/
saveFolder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveFolder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::saveFolder
* @see app/Http/Controllers/NotepadController.php:38
* @route '/notepad/folder'
*/
const saveFolderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveFolder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::saveFolder
* @see app/Http/Controllers/NotepadController.php:38
* @route '/notepad/folder'
*/
saveFolderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveFolder.url(options),
    method: 'post',
})

saveFolder.form = saveFolderForm

/**
* @see \App\Http\Controllers\NotepadController::deleteFolder
* @see app/Http/Controllers/NotepadController.php:106
* @route '/notepad/folder'
*/
export const deleteFolder = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteFolder.url(options),
    method: 'delete',
})

deleteFolder.definition = {
    methods: ["delete"],
    url: '/notepad/folder',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotepadController::deleteFolder
* @see app/Http/Controllers/NotepadController.php:106
* @route '/notepad/folder'
*/
deleteFolder.url = (options?: RouteQueryOptions) => {
    return deleteFolder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::deleteFolder
* @see app/Http/Controllers/NotepadController.php:106
* @route '/notepad/folder'
*/
deleteFolder.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteFolder.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NotepadController::deleteFolder
* @see app/Http/Controllers/NotepadController.php:106
* @route '/notepad/folder'
*/
const deleteFolderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteFolder.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::deleteFolder
* @see app/Http/Controllers/NotepadController.php:106
* @route '/notepad/folder'
*/
deleteFolderForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteFolder.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteFolder.form = deleteFolderForm

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
export const getNotesList = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNotesList.url(args, options),
    method: 'get',
})

getNotesList.definition = {
    methods: ["get","head"],
    url: '/notepad/folder/{notepadFolder}/notes-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
getNotesList.url = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notepadFolder: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notepadFolder: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notepadFolder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notepadFolder: typeof args.notepadFolder === 'object'
        ? args.notepadFolder.id
        : args.notepadFolder,
    }

    return getNotesList.definition.url
            .replace('{notepadFolder}', parsedArgs.notepadFolder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
getNotesList.get = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNotesList.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
getNotesList.head = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getNotesList.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
const getNotesListForm = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNotesList.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
getNotesListForm.get = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNotesList.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNotesList
* @see app/Http/Controllers/NotepadController.php:54
* @route '/notepad/folder/{notepadFolder}/notes-list'
*/
getNotesListForm.head = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNotesList.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getNotesList.form = getNotesListForm

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
export const getNote = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNote.url(args, options),
    method: 'get',
})

getNote.definition = {
    methods: ["get","head"],
    url: '/notepad/folder/{notepadFolder}/{notepadNote?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
getNote.url = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            notepadFolder: args[0],
            notepadNote: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "notepadNote",
    ])

    const parsedArgs = {
        notepadFolder: typeof args.notepadFolder === 'object'
        ? args.notepadFolder.id
        : args.notepadFolder,
        notepadNote: typeof args.notepadNote === 'object'
        ? args.notepadNote.id
        : args.notepadNote,
    }

    return getNote.definition.url
            .replace('{notepadFolder}', parsedArgs.notepadFolder.toString())
            .replace('{notepadNote?}', parsedArgs.notepadNote?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
getNote.get = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNote.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
getNote.head = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getNote.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
const getNoteForm = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNote.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
getNoteForm.get = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNote.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotepadController::getNote
* @see app/Http/Controllers/NotepadController.php:64
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
getNoteForm.head = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getNote.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getNote.form = getNoteForm

/**
* @see \App\Http\Controllers\NotepadController::createNote
* @see app/Http/Controllers/NotepadController.php:79
* @route '/notepad/folder/{notepadFolder}/create-note'
*/
export const createNote = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createNote.url(args, options),
    method: 'post',
})

createNote.definition = {
    methods: ["post"],
    url: '/notepad/folder/{notepadFolder}/create-note',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotepadController::createNote
* @see app/Http/Controllers/NotepadController.php:79
* @route '/notepad/folder/{notepadFolder}/create-note'
*/
createNote.url = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notepadFolder: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { notepadFolder: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            notepadFolder: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notepadFolder: typeof args.notepadFolder === 'object'
        ? args.notepadFolder.id
        : args.notepadFolder,
    }

    return createNote.definition.url
            .replace('{notepadFolder}', parsedArgs.notepadFolder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::createNote
* @see app/Http/Controllers/NotepadController.php:79
* @route '/notepad/folder/{notepadFolder}/create-note'
*/
createNote.post = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createNote.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::createNote
* @see app/Http/Controllers/NotepadController.php:79
* @route '/notepad/folder/{notepadFolder}/create-note'
*/
const createNoteForm = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createNote.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::createNote
* @see app/Http/Controllers/NotepadController.php:79
* @route '/notepad/folder/{notepadFolder}/create-note'
*/
createNoteForm.post = (args: { notepadFolder: number | { id: number } } | [notepadFolder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createNote.url(args, options),
    method: 'post',
})

createNote.form = createNoteForm

/**
* @see \App\Http\Controllers\NotepadController::saveNote
* @see app/Http/Controllers/NotepadController.php:94
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
export const saveNote = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveNote.url(args, options),
    method: 'post',
})

saveNote.definition = {
    methods: ["post"],
    url: '/notepad/folder/{notepadFolder}/{notepadNote?}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotepadController::saveNote
* @see app/Http/Controllers/NotepadController.php:94
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
saveNote.url = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            notepadFolder: args[0],
            notepadNote: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "notepadNote",
    ])

    const parsedArgs = {
        notepadFolder: typeof args.notepadFolder === 'object'
        ? args.notepadFolder.id
        : args.notepadFolder,
        notepadNote: typeof args.notepadNote === 'object'
        ? args.notepadNote.id
        : args.notepadNote,
    }

    return saveNote.definition.url
            .replace('{notepadFolder}', parsedArgs.notepadFolder.toString())
            .replace('{notepadNote?}', parsedArgs.notepadNote?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::saveNote
* @see app/Http/Controllers/NotepadController.php:94
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
saveNote.post = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveNote.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::saveNote
* @see app/Http/Controllers/NotepadController.php:94
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
const saveNoteForm = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveNote.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::saveNote
* @see app/Http/Controllers/NotepadController.php:94
* @route '/notepad/folder/{notepadFolder}/{notepadNote?}'
*/
saveNoteForm.post = (args: { notepadFolder: number | { id: number }, notepadNote?: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: saveNote.url(args, options),
    method: 'post',
})

saveNote.form = saveNoteForm

/**
* @see \App\Http\Controllers\NotepadController::deleteNote
* @see app/Http/Controllers/NotepadController.php:142
* @route '/notepad/folder/{notepadFolder}/{notepadNote}'
*/
export const deleteNote = (args: { notepadFolder: number | { id: number }, notepadNote: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteNote.url(args, options),
    method: 'delete',
})

deleteNote.definition = {
    methods: ["delete"],
    url: '/notepad/folder/{notepadFolder}/{notepadNote}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotepadController::deleteNote
* @see app/Http/Controllers/NotepadController.php:142
* @route '/notepad/folder/{notepadFolder}/{notepadNote}'
*/
deleteNote.url = (args: { notepadFolder: number | { id: number }, notepadNote: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            notepadFolder: args[0],
            notepadNote: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        notepadFolder: typeof args.notepadFolder === 'object'
        ? args.notepadFolder.id
        : args.notepadFolder,
        notepadNote: typeof args.notepadNote === 'object'
        ? args.notepadNote.id
        : args.notepadNote,
    }

    return deleteNote.definition.url
            .replace('{notepadFolder}', parsedArgs.notepadFolder.toString())
            .replace('{notepadNote}', parsedArgs.notepadNote.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotepadController::deleteNote
* @see app/Http/Controllers/NotepadController.php:142
* @route '/notepad/folder/{notepadFolder}/{notepadNote}'
*/
deleteNote.delete = (args: { notepadFolder: number | { id: number }, notepadNote: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteNote.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NotepadController::deleteNote
* @see app/Http/Controllers/NotepadController.php:142
* @route '/notepad/folder/{notepadFolder}/{notepadNote}'
*/
const deleteNoteForm = (args: { notepadFolder: number | { id: number }, notepadNote: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteNote.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotepadController::deleteNote
* @see app/Http/Controllers/NotepadController.php:142
* @route '/notepad/folder/{notepadFolder}/{notepadNote}'
*/
deleteNoteForm.delete = (args: { notepadFolder: number | { id: number }, notepadNote: number | { id: number } } | [notepadFolder: number | { id: number }, notepadNote: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteNote.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteNote.form = deleteNoteForm
