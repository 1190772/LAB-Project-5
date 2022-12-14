import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10) || 3000,

  /**
   * That long string from mlab
   */
  databaseURL:
    process.env.MONGODB_URI || 'mongodb://mongoadmin:8b07b044ab2feb8bccca1f3a@vsgate-s1.dei.isep.ipp.pt:10305/admin',

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET || 'my sakdfho2390asjod$%jl)!sdjas0i secret',

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  controllers: {
    role: {
      name: 'RoleController',
      path: '../controllers/roleController',
    },
    truck: {
      name: 'TruckController',
      path: '../controllers/truckController',
    },
    route: {
      name: 'RouteController',
      path: '../controllers/routeController',
    },
  },

  repos: {
    role: {
      name: 'RoleRepo',
      path: '../repos/roleRepo',
    },
    truck: {
      name: 'TruckRepo',
      path: '../repos/truckRepo',
    },
    route: {
      name: 'RouteRepo',
      path: '../repos/routeRepo',
    },
    user: {
      name: 'UserRepo',
      path: '../repos/userRepo',
    },
  },

  services: {
    role: {
      name: 'RoleService',
      path: '../services/roleService',
    },
    truck: {
      name: 'TruckService',
      path: '../services/truckService',
    },
    route: {
      name: 'RouteService',
      path: '../services/routeService',
    },
  },
};
