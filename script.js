console.log("thanapong panyaruen");
console.log("Moo")

// ฟังก์ชันเพิ่มตัวเลขหรือเครื่องหมายที่กดเข้าไปในช่องแสดงผล
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // ฟังก์ชันล้างช่องแสดงผล
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // ฟังก์ชันคำนวณผลลัพธ์จากข้อความที่อยู่ในช่องแสดงผล
  function calculateResult() {
    try {
      var expression = document.getElementById('display').value;
      var result = eval(expression); // ประมวลผลการคำนวณ
      document.getElementById('display').value = result;
    } catch (e) {
      document.getElementById('display').value = 'Error'; // หากมีข้อผิดพลาด
    }
  }
  