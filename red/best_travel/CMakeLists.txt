cmake_minimum_required(VERSION 3.25)
project(best_travel)

set(CMAKE_CXX_STANDARD 17)

add_executable(best_travel best_travel.h choose_best_sum.c display_results.c is_input_valid.c main.c)
