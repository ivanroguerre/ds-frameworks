<template>
    <div class="container">
      <div class="row">
        <ds-card-select-group id="card-select" class="col-lg-12 col-md-12 col-sm-12">
          <ds-card-select slot="card-1" value="uno" class="col-lg-3 col-md-3 col-sm-12">
            <div slot="icon">
              <svg width="60" height="60" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="black"></path>
              </svg>
            </div>
            <div slot="title">Lorem ipsum dolor</div>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </ds-card-select>
          <ds-card-select slot="card-2" value="dos" class="col-lg-3 col-md-3 col-sm-12">
            <div slot="icon">
              <svg width="60" height="60" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="black"></path>
              </svg>
            </div>
            <div slot="title">Lorem ipsum dolor</div>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </div>
          </ds-card-select>
          <ds-card-select slot="card-3" value="tres" class="col-lg-3 col-md-3 col-sm-12">
            <div slot="icon">
              <svg width="60" height="60" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="black"></path>
              </svg>
            </div>
            <div slot="title">Lorem ipsum dolor</div>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </ds-card-select>
        </ds-card-select-group>
      </div>
    </div>
</template>

<script>
import "@dscla/ds-card"
export default {
	name: "CardSelectComponent"
}
</script>