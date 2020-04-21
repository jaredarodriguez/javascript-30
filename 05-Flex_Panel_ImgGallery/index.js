const panels = document.querySelectorAll('.panel'); 

function toggleOpen() {
    this.classlist.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));