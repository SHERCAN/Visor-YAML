$("#submit").on("click", function () {
  df = {
    dataframe: getFormData($("#formTo")),
  };
  console.log(df.dataframe);
  $.ajax({
    url: "/config",
    type: "POST",
    async: true,
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(df),
    success: function (result) {
      console.log(result);
      $("#formTo");
    },
    error: function (xhr, resp, text) {
      console.log(xhr, resp, text);
    },
  });
});

var conter = 1;
$("#formToAlternate").on("click", function () {
  conter += 1;
  let counter = document.getElementById("resgistryCounter");
  counter.value = conter;
  $("#formDiv").append(
    `<h6>Register</h6>
          <div class="col">
            <div class="row g-1 align-items-center">
              <div class="col-auto mb-1">
                <label for="addressConfig" class="form-label">Address server</label>
              </div>
              <div class="col-auto mb-1">
                <input id="addressConfig" name="addressConfig" class="form-control" type="number" />
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <label for="countConfig" class="form-label">Count</label>
              </div>
              <div class="col-auto mb-1">
                <input id="countConfig" name="countConfig" class="form-control" type="number" />
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <label for="destinAddressConfig" class="form-label">Destination address</label>
              </div>
              <div class="col-auto mb-1">
                <input id="destinAddressConfig" name="destinAddressConfig" class="form-control" type="number" />
              </div>
            </div>
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <label for="allowWriteConfig" class="form-label">Allow Write</label>
              </div>
              <div class="col-auto mb-1">
                <select id="allowWriteConfig" name="allowWriteConfig" class="form-select">
                  <option>False</option>
                  <option>True</option>
                </select>
              </div>
            </div>
          </div>`
  );
});

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};
  console.log(unindexed_array);
  $.map(unindexed_array, function (n, i) {
    console.log(indexed_array[n["value"]]);
    console.log(indexed_array);
    if ($.trim(n["value"]).length) {
      if (indexed_array[n["name"]] !== undefined) {
        if (n["name"]) {
          indexed_array[n["name"]].push(n["value"]);
        }
      } else {
        indexed_array[n["name"]] = new Array(n["value"]);
      }
    }
  });
  return indexed_array;
}
