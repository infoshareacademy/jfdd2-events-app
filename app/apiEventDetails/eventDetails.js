/**
 * Created by bartlomiejmilewski on 20.04.16.
 */
$.ajax({
  method: "GET",
  url: "http://planer.info.pl/api/rest/events.json?start_date=2016-04-01&end_date=2016-04-30",
  data: ({

    id: "",
    place: {
      id: "",
      name: ""
    },
    endDate: "",
    name: "",
    urls: {
      www: ""
    },
    descLong: "",
    categoryId: "",
    startDate: "",
    organizer: {
      id: "",
      designation: ""
    },
    active: "",
    tickets: {
      type: ""
    }

  }),
  dataType: 'JSON',
  success: function(result){
    $("modal-body").html(result);
  }
});
