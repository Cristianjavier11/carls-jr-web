import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  correo: z.string().email({
    message: "Por favor, ingresa un correo electrónico válido.",
  }),
  telefono: z.string().regex(/^[0-9]{10}$/, {
    message: "El teléfono debe contener exactamente 10 dígitos numéricos.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.success("¡Mensaje enviado con éxito!", {
      description: "Nos pondremos en contacto contigo lo más pronto posible.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Tienes <span className="text-primary">hambre</span> o alguna duda?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Déjanos tus comentarios, sugerencias o requerimientos especiales para tus eventos. En Carl's Jr. Bosque de San Isidro estamos para servirte con una sonrisa.
            </p>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    📞
                  </span>
                  +52 (33) 1234 5678
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                    ✉️
                  </span>
                  contacto@carlsjr-sanisidro.mx
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl shadow-xl border border-border"
          >
            <h3 className="text-2xl font-bold font-serif mb-6 text-foreground">Escríbenos</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan Pérez" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@ejemplo.com" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Teléfono (10 dígitos)</FormLabel>
                        <FormControl>
                          <Input placeholder="3312345678" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="¿En qué podemos ayudarte?" 
                          className="min-h-[120px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
