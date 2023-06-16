#include "best_travel.h"

bool    are_enough_distances_listed(t_parameters *parameters) {
    if (parameters->list_of_distances_size >= parameters->number_of_towns_to_visit)
        return (true);
    return (false);
}

void    swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void    rearrange_array(int i, int arr[], int count[]) {
    if (i % 2 == 0) {
        swap(&arr[0], &arr[i]);
    } else {
        swap(&arr[count[i]], &arr[i]);
    }
}

int     sum_distances(int current_sum, int arr[], int number_of_towns) {
    for (int j = 0; j < number_of_towns; j++) {
        current_sum += arr[j];
    }
    return current_sum;
}

int     update_highest_sum(int current_sum, int highest_sum, int max_distance) {
    if (current_sum > highest_sum &&
        current_sum <= max_distance)
        highest_sum = current_sum;
    return (highest_sum);
}

bool    is_maximum_sum_of_distances_matched(int current_sum, int max_distance) {
    if (current_sum == max_distance)
        return (true);
    return (false);
}

int     choose_best_sum(t_parameters *parameters) {
    if (!are_enough_distances_listed(parameters))
        return (-1);

    int     current_sum = 0;
    int     highest_sum = 0;
    int     *arr = parameters->list_of_distances;
    int     size = parameters->list_of_distances_size;
    int     number_of_towns = parameters->number_of_towns_to_visit;
    int     max_distance = parameters->maximum_sum_of_distances;
    int     count[size];
    for (int i = 0; i < size; i++) {
        count[i] = 0;
    }

    int i = 0;
    while (i < size) {
        if (count[i] < i) {
            rearrange_array(i, arr, count);
            current_sum = sum_distances(current_sum, arr, number_of_towns);
            highest_sum = update_highest_sum(current_sum, highest_sum, max_distance);
            if (is_maximum_sum_of_distances_matched(current_sum, max_distance))
                return (current_sum);
            current_sum = 0;
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return (highest_sum);
}
