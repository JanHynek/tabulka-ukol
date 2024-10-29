import {
  Chip,
  Divider,
  Fade,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import { useRootStore } from "../../App";
import ImageOff from "../../assets/images/image-off.svg";
import BackArrow from "../../assets/images/back-arrow.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const CompanyDetail = observer(() => {
  const { companyDetailStore } = useRootStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const data = companyDetailStore.company?.data;
  const isPotencional = data?.state.split("_")[0] === "A";

  useEffect(() => {
    companyDetailStore.fetchCompany(Number(id));
    return () => {
      companyDetailStore.resetCompany();
    };
  }, [companyDetailStore, id]);

  return (
    <Fade in={!companyDetailStore.loading} timeout={1000}>
      <Paper sx={{ p: 0 }}>
        {companyDetailStore.loading ? (
          <Skeleton height="140px" sx={{ mx: 3 }} />
        ) : (
          <Stack p={{ xs: 3, md: 4 }} spacing={2}>
            <Stack>
              <Stack direction="row" alignItems="center" spacing={3}>
                <IconButton onClick={() => navigate("/")}>
                  <img src={BackArrow} style={{ width: "20px" }} />
                </IconButton>
                <Typography variant="h4" fontWeight={700}>
                  {data?.name}
                </Typography>
              </Stack>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">
                {data?.regNumber ? `IČO: ${data?.regNumber}` : ""}
              </Typography>
              <Typography variant="h6">
                {data?.taxNumber ? `DIČ: ${data?.taxNumber}` : ""}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={3}>
              <img src={ImageOff} style={{ width: "100px" }} />
              <Stack>
                <Typography>{data?.primaryAddress?.address?.street}</Typography>
                <Typography>
                  {data?.primaryAddress?.address?.zipCode}
                  &nbsp;&nbsp;
                  {data?.primaryAddress?.address?.city}
                </Typography>
                <Typography>
                  {data?.primaryAddress?.address?.country}
                </Typography>
                <Link
                  style={{ fontSize: "18px" }}
                  target="_blank"
                  to={`${import.meta.env.VITE_GOOGLE_MAP_URL}?q=${
                    data?.primaryAddress?.address?.street ?? ""
                  } ${data?.primaryAddress?.address?.country ?? ""}`}
                >
                  Zobrazit na mapě
                </Link>
              </Stack>
            </Stack>

            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              inventore veritatis consequuntur? Cupiditate est soluta laboriosam
              suscipit dolor, blanditiis atque mollitia doloremque reiciendis
              dolores. Animi aliquid et corrupti dolores architecto!
            </Typography>
            <Chip
              label={isPotencional ? "Potencionální klient" : "Klientem"}
              color={isPotencional ? "warning" : "success"}
              sx={{ width: "160px" }}
            />
            <Typography>
              {data?.owner?.fullName ? (
                <>
                  Vlastník:&nbsp;
                  <span style={{ fontWeight: 600 }}>
                    {data?.owner?.fullName}
                  </span>
                </>
              ) : (
                ""
              )}
            </Typography>
          </Stack>
        )}
      </Paper>
    </Fade>
  );
});

export default CompanyDetail;
