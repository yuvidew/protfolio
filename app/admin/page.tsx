import { QueryProvider } from "@/components/provider/QueryProvider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AllProjects } from "./_components/AllProjects"
import { ProjectFrom } from "./_components/ProjectFrom"


export default function Home() {
    return (
        <QueryProvider>
            <section className="">
                <Tabs defaultValue="all projects" className="w-full">
                    <TabsList className=" justify-between w-full">
                        <TabsTrigger value="all projects">All Projects</TabsTrigger>
                        <TabsTrigger value="create project">
                                Create Project
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all projects">
                        <AllProjects/>
                    </TabsContent>
                    <TabsContent value="create project">
                        <ProjectFrom/>
                    </TabsContent>
                </Tabs>
            </section>
        </QueryProvider>
    )
}