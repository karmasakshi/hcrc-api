/**
 * CountController
 *
 * @description :: Server-side logic for managing counts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    all: function (req, res) {
        async.parallel({
            // Admin
            admin: function (callback) {
                async.parallel({
                    all: function (callback) {
                        Admin.count(function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    active: function (callback) {
                        Admin.count({active: true}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    inactive: function (callback) {
                        Admin.count({active: false}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    }
                }, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            },
            invoice: function (callback) {
                async.parallel({
                    all: function (callback) {
                        Invoice.count(function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    active: function (callback) {
                        Invoice.count({active: true}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    inactive: function (callback) {
                        Invoice.count({active: false}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    }
                }, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            },
            product: function (callback) {
                async.parallel({
                    all: function (callback) {
                        Product.count(function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    active: function (callback) {
                        Product.count({active: true}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    inactive: function (callback) {
                        Product.count({active: false}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    }
                }, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            },
            trader: function (callback) {
                async.parallel({
                    all: function (callback) {
                        Trader.count(function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    active: function (callback) {
                        Trader.count({active: true}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    },
                    inactive: function (callback) {
                        Trader.count({active: false}, function (err, count) {
                            if (err) {
                                callback(err);
                            } else {
                                callback(null, count);
                            }
                        });
                    }
                }, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                });
            }
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    admin: function (req, res) {
        async.parallel({
            all: function (callback) {
                Admin.count(function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            active: function (callback) {
                Admin.count({active: true}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            inactive: function (callback) {
                Admin.count({active: false}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            }
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    invoice: function (req, res) {
        async.parallel({
            all: function (callback) {
                Invoice.count(function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            active: function (callback) {
                Invoice.count({active: true}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            inactive: function (callback) {
                Invoice.count({active: false}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            }
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    product: function (req, res) {
        async.parallel({
            all: function (callback) {
                Product.count(function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            active: function (callback) {
                Product.count({active: true}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            inactive: function (callback) {
                Product.count({active: false}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            }
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    },
    trader: function (req, res) {
        async.parallel({
            all: function (callback) {
                Trader.count(function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            active: function (callback) {
                Trader.count({active: true}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            },
            inactive: function (callback) {
                Trader.count({active: false}, function (err, count) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, count);
                    }
                });
            }
        }, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.json(result);
            }
        });
    }
};