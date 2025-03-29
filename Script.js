// script.js

document.getElementById('proposeButton').addEventListener('click', function () {
    const proposalMessage = document.getElementById('proposalMessage');
    proposalMessage.classList.remove('hidden');
    proposalMessage.style.animation = 'fadeInDown ease-in-out';
});
