<script>
import { flashes } from '../stores/flashes.js'

import Icon from 'fa-svelte'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons/faTimesCircle'

let closeIcon = faTimesCircle;

function removeFlash(event){
    let id = event.target.closest('.flash').dataset.id;
    $flashes.splice(id, 1);
    $flashes = $flashes;
}
</script>

<style type="text/scss">
    #flashes{
        .flash{
            @apply flex w-screen text-white font-bold justify-between items-center;
            &.error{
                @apply bg-danger;
            }
            &.success{
                @apply bg-success;
            }
            &.warning{
                @apply bg-warning;
            }
            .message{
                padding: 1rem;
            }
            .icon{
                @apply self-start m-1 cursor-pointer;
            }
        }
    }
</style>

<div id="flashes">
    {#each $flashes as flash, key}
        <div data-id="{key}"class="flash {flash.type}">
            <span class="message">{flash.message}</span>
            <span class="icon"
                on:click|capture={removeFlash}>
                <Icon icon={closeIcon} />
            </span>
        </div>
    {/each}
</div>
