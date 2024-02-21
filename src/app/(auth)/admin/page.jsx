import { Suspense } from "react"
import AdminPosts from "../../../components/AdminPosts"
import AdminPostForm from "../../../components/AdminPostForm"
import AdminUsers from "../../../components/AdminUsers"
import AdminUserForm from "../../../components/AdminUserForm"
import { auth } from "../../../lib/auth"

const AdminPage = async () => {
  const session = await auth()
  return (
    <div className="mt-[40px]">
      {/* Row */}
      <div className="grid grid-cols-2 mmd:flex mmd:flex-col gap-[20px]  ">
        {/* Column1-AdminPost */}
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        {/* Column2-AdminPostForm */}
        <div>
          <AdminPostForm userId={session.user.id} />
        </div>
        {/* Column3-AdminUsers */}
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        {/* Column4-AdminUsersForm */}
        <div>
          <AdminUserForm />
        </div>

      </div>
    </div>
  )

}

export default AdminPage