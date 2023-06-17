#include "best_travel.h"

bool    are_enough_distances_listed(t_input *input) {
    if (input->distances_size >= input->towns_to_visit)
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

bool    is_max_distance_matched(int current_sum, int max_distance) {
    return (current_sum == max_distance);
}

int     choose_best_sum(t_input *input) {
    if (!are_enough_distances_listed(input))
        return (-1);

    int     current_sum = 0;
    int     highest_sum = 0;
    int     count[input->distances_size];
    for (int i = 0; i < input->distances_size; i++) {
        count[i] = 0;
    }

    int i = 0;
    while (i < input->distances_size) {
        if (count[i] < i) {
            rearrange_array(i, input->distances, count);
            current_sum = sum_distances(current_sum, input->distances, input->towns_to_visit);
            highest_sum = update_highest_sum(current_sum, highest_sum, input->max_distance);
            if (is_max_distance_matched(current_sum, input->max_distance))
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
