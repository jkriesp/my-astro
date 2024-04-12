---
title: "Colima: The Docker Detour"
description: "Overcoming Docker Desktop’s Licensing with Colima"
pubDate: "Apr 20 2024"
heroImage: "/blog-placeholder-3.jpg"
---

Encountering the `cannot connect to the docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?` error is almost a rite of passage for those venturing into the world of Docker and containerization. However, you could say the real challenge begins when you face Docker Desktop’s licensing dilemma. Whether you're on a corporate machine, in an environment where Docker Desktop isn’t permitted, or simply wary of license compliance issues, finding an efficient alternative can be daunting.

Like many, I found myself navigating this murky terrain. The [licensing changes](https://www.docker.com/blog/updating-product-subscriptions/) introduced by Docker Desktop prompted me to seek a solution that wouldn’t compromise my workflow or legal standing. In all situations, navigating the beuracrecy of the corperate world to get ahold of a Docker Business licence takes longer than setting up your Docker environment. This solution is for you so that you have something working until that licence is in order, or just a smooth Docker setup.

You might find yourself cobbling together a makeshift solution with a virtual machine and some Linux distro, only to realize a year has passed and you still haven’t found a better way. Well, don’t worry—I've been there, and I found there is a better solution.

## Colima

Colima - a virtual machine of magic. It offers a Docker environment on macOS (and Linux) that’s as close to native as it gets. The beauty of Colima lies in its simplicity and efficiency. With just a few commands, you can mirror the Docker Desktop experience without the licensing headaches:

```bash
brew install colima # mac
colima start
docker version
```

![Gif of Colima on the command line](/blog-post-assets/colima.gif)

The magic happens with the automatic file sharing and port forwarding making it a seemless user experience as if docker was running on the host machine itself. It's based on Lima, where the difference is that Colima is a level higher, that means less (or no) configuration before you're good to go.

## Why Colima Stands Out

Colima isn’t just another virtual machine for Docker; it’s a tailored solution that addresses the specific needs of Docker users affected by licensing constraints. Here’s why it stands out:

- **Ease of Use**: Installation and setup are straightforward, making it accessible even for those new to containerization.
- **Performance**: Colima is designed to be lightweight, ensuring that your Docker containers run efficiently.
- **Seamless Integration**: It mimics the Docker Desktop experience, from file sharing to port forwarding, without the cumbersome setup typically associated with virtual machines.

## Conclusion

Colima is more than a workaround; it’s a viable, efficient, and legal alternative to Docker Desktop. For those entangled in Docker Desktop’s licensing web, Colima offers a breath of fresh air, combining the ease of Docker Desktop with the legality and performance efficiency needed for corporate and personal use.

As the Docker landscape evolves, tools like Colima prove invaluable, ensuring that developers have the flexibility and freedom to work effectively. If you’ve faced similar challenges with Docker Desktop, I encourage you to try Colima. It might just reshape your Docker experience as it did mine.

### Sources

- [Colima Github](https://github.com/abiosoft/colima)
- [Lima Github](https://github.com/lima-vm/lima)
- [Can it run alongside Docker for Mac?](https://github.com/abiosoft/colima/blob/main/docs/FAQ.md#can-it-run-alongside-docker-for-mac)
