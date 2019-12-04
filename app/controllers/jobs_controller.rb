class JobsController < ApplicationController
  before_action :authenticate_user!, except: :index
  before_action :set_job, only: [:show, :edit, :update, :destroy, :apply]
  before_action :set_selected_conversation, only: [:show]
  before_action :forbid_if_current_user_isnt_owner, only: [:edit, :destroy, :update]
  before_action :forbid_if_current_user_is_owner, only: :apply

  # GET /jobs
  def index
    @jobs = Job.all
  end

  # GET /jobs/1
  def show
    @scope = if @job.user == current_user
      @job.conversations
    else
      []
    end
  end

  # GET /jobs/new
  def new
    @job = Job.new
  end

  # GET /jobs/1/edit
  def edit
  end

  # POST /jobs
  def create
    @job = current_user.jobs.new(job_params)

    if @job.save
      redirect_to @job, notice: 'Job was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /jobs/1
  def update
    if @job.update(job_params)
      redirect_to @job, notice: 'Job was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
    redirect_to jobs_url, notice: 'Job was successfully destroyed.'
  end

  def apply
    @conversation = @job.conversations.create user: current_user
    @conversation.messages.create body: "Quiero aplicar!", user: current_user
    redirect_to job_path(@job), notice: "Application was successful."
  end

  private

    def forbid_if_current_user_is_owner
      if @job.user == current_user
        head :forbidden
      end
    end

    def forbid_if_current_user_isnt_owner
      if @job.user != current_user
        head :forbidden
      end
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    def set_selected_conversation
      @conversation = if @job.user == current_user
        @job.conversations.find_by(id: params[:conversation_id]) || @job.conversations.order(:created_at).first
      else
        @job.conversations.find_by user: current_user
      end
    end

    # Only allow a trusted parameter "white list" through.
    def job_params
      params.require(:job).permit(:title, :description, :category_id)
    end
end
