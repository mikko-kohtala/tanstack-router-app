import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";

export default function HrSettingsScreen() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">HR Configurator — Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>Update organization-wide HR preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1">
                <span className="font-medium text-sm">Default Working Hours</span>
                <input className="w-full rounded-md border px-3 py-2" defaultValue="09:00 - 17:00" type="text" />
              </label>
              <label className="space-y-1">
                <span className="font-medium text-sm">Vacation Days / Year</span>
                <input className="w-full rounded-md border px-3 py-2" defaultValue={25} min={0} type="number" />
              </label>
              <label className="space-y-1">
                <span className="font-medium text-sm">Probation Period (months)</span>
                <input className="w-full rounded-md border px-3 py-2" defaultValue={3} min={0} type="number" />
              </label>
              <label className="space-y-1">
                <span className="font-medium text-sm">Overtime Approval Required</span>
                <select className="w-full rounded-md border px-3 py-2" defaultValue="yes">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input className="h-4 w-4" defaultChecked id="remotePolicy" type="checkbox" />
              <label className="text-sm" htmlFor="remotePolicy">
                Allow Remote Work by Default
              </label>
            </div>

            <div className="flex gap-2 pt-2">
              <Button type="button">Save Changes</Button>
              <Button type="button" variant="outline">
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
