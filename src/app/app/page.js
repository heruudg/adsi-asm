import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data: product } = await supabase.from("product").select();

    return (
      <ul>
        <li>
            <p className="text-3xl font-bold " >{JSON.stringify(instruments, null, 2)}</p></li>
      </ul>
    )
  }