import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Gif from "../assets/images/launchpad/gif.webp";
import { Launchpad1, Launchpad2, Launchpad3 } from "./svg";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
export default function Launchpad() {
  const [sekund, setSekund] = React.useState(60);
  const [minute, setMinute] = React.useState(45);
  useEffect(() => {
    setTimeout(() => {
      setSekund(sekund - 1);
      if (sekund === 0) {
        setSekund(60);
      }
    }, 1000);
  }, [sekund]);
  useEffect(() => {
    setTimeout(() => {
      setMinute(sekund - 1);
      if (sekund === 0) {
        setMinute(45);
      }
    }, 45000);
  }, [minute]);

  const navigate = useNavigate();
  return (
    <>
      <div className="launchpad">
        <Header />
        <div style={{ marginTop: "100px" }} className="launchpad_container">
          <div className="container_d_flex">
            <div className="future_lanch">
              <div className="FEATURED_LAUNCH">FEATURED LAUNCH</div>
              <h1 className="FEATURED_LAUNCH_h1">Project Hive</h1>
              <div className="d_flex_icon">
                <div
                  className="tw-my-auto"
                  data-tooltipped
                  aria-describedby="tippy-tooltip-17"
                  data-original-title="doxxed"
                  style={{ display: "inline" }}
                >
                  <div className="doxxed_">DOXXED</div>
                </div>
                <div
                  className="tw-my-auto"
                  data-tooltipped
                  aria-describedby="tippy-tooltip-18"
                  data-original-title="escrow14d"
                  style={{ display: "inline" }}
                >
                  <div className="escrow_">ESCROW 14d</div>
                </div>
                <div className="tw-border tw-border-solid tw-border-purple-1 tw-p-2 tw-rounded-md tw-text-white-1 tw-h-fit-content tw-text-[14px] tw-flex tw-gap-2 tw-whitespace-nowrap">
                  <span className="tw-font-light">TOTAL ITEMS</span>
                  <span className="tw-font-bold">7&nbsp;000</span>
                </div>
                <div className="tw-border tw-border-solid tw-border-purple-1 tw-p-2 tw-rounded-md tw-text-white-1 tw-h-fit-content tw-text-[14px] tw-flex tw-gap-2 tw-whitespace-nowrap">
                  <span className="tw-font-light">PRICE</span>
                  <span className="tw-font-bold">2.5◎</span>
                </div>
                <div className="icon_d_flex">
                  <div
                    className="icon_d_flex_"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-19"
                    data-original-title="Website"
                    style={{ display: "inline" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://project-hive.io/"
                    >
                      <Launchpad1 />
                      {/* <img
                        alt="..."
                        src="/static/media/globe_white.1cc8238d59c1be911999eabdeeb72b8c.svg"
                        className="tw-w-6 tw-h-6 hover:tw-opacity-80"
                      /> */}
                    </a>
                  </div>
                  <div
                    className="icon_d_flex_"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-20"
                    data-original-title="Discord"
                    style={{ display: "inline" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://discord.gg/project-hive"
                    >
                      <Launchpad2 />
                      {/* <img
                        alt="..."
                        src="/static/media/discord_white.a80cd7b6a598d458f12090e4f0316953.svg"
                        className="tw-w-6 tw-h-6 hover:tw-opacity-80"
                      /> */}
                    </a>
                  </div>
                  <div
                    className="icon_d_flex_"
                    data-tooltipped
                    aria-describedby="tippy-tooltip-21"
                    data-original-title="Twitter"
                    style={{ display: "inline" }}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/project_hive_io"
                    >
                      <Launchpad3 />
                      {/* <img
                        alt="..."
                        src="/static/media/twitter_white.646bf11eec160fc04b57653d5d95478b.svg"
                        className="tw-w-6 tw-h-6 hover:tw-opacity-80"
                      /> */}
                    </a>
                  </div>
                </div>
              </div>
              <p className="text__p">
                Best shot to prepare for the game to be released later this
                year. Probably the most important Project Hive’s collection ever
                will be minted
              </p>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-22"
                  data-original-title="Project Hive Whitelist"
                  style={{ display: "inline" }}
                >
                  <div className="d_flex___">
                    <div className="d_flex_bottm">
                      <div>
                        <div className="tw-flex tw-items-center">
                          <div className="aaa">Project Hive Whitelist</div>
                        </div>
                      </div>
                      <div className="ended">Ended</div>
                    </div>
                    <div className="text_aaa">
                      <span>
                        WHITELIST <b>5199</b>
                      </span>
                      <b>•</b>
                      <span>
                        MAX <b>2 TOKENS</b>
                      </span>
                      <b>•</b>
                      <span>
                        Price <b>2.00◎</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-26"
                  data-original-title="MagicDAO Whitelist"
                  style={{ display: "inline" }}
                >
                  <div className="tw-rounded-xl tw-border tw-border-solid tw-border-purple-1 tw-p-3 tw-flex tw-flex-col tw-gap-6 hover:tw-bg-purple-1 hover:tw-cursor-help">
                    <div className="ddd_flex">
                      <div>
                        <div className="tw-flex tw-items-center">
                          <div className="publick">MagicDAO Whitelist</div>
                        </div>
                        <div className="aaa_flex">
                          <span>
                            WHITELIST <b>1401</b>
                          </span>
                          <b>•</b>
                          <span>
                            MAX <b>2 TOKENS</b>
                          </span>
                          <b>•</b>
                          <span>
                            Price <b>2.00◎</b>
                          </span>
                        </div>
                      </div>
                      <div className="tw-flex tw-flex-row tw-gap-2 tw-text-pink-hot tw-text-sm tw-tracking-wide tw-font-medium tw-text-center tw-uppercase tw-items-center">
                        Ends in
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className
                  data-tooltipped
                  aria-describedby="tippy-tooltip-30"
                  data-original-title="Public Sale"
                  style={{ display: "inline" }}
                >
                  <div className="tw-rounded-xl tw-border tw-border-solid tw-border-purple-1 tw-p-3 tw-flex tw-flex-col tw-gap-6 hover:tw-bg-purple-1 hover:tw-cursor-help">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div>
                        <div className="publick">
                          <div className="publick">Public Sale</div>
                        </div>
                      </div>
                      <div className="tw-flex tw-flex-row tw-gap-2 tw-text-pink-hot tw-text-sm tw-tracking-wide tw-font-medium tw-text-center tw-uppercase tw-items-center">
                        Starts in
                      </div>
                      <div
                        className
                        data-tooltipped
                        aria-describedby="tippy-tooltip-24"
                        data-original-title="Minutes"
                        style={{ display: "inline" }}
                      >
                        <div className="tw-w-8 tw-h-8 tw-cursor-help tw-bg-purple-3 tw-flex tw-items-center tw-justify-center tw-rounded">
                          <span className="tw-text-sm tw-font-bold tw-text-white-1 tw-font-mono">
                            {minute}
                          </span>
                        </div>
                      </div>
                      <div
                        className
                        data-tooltipped
                        aria-describedby="tippy-tooltip-25"
                        data-original-title="Seconds"
                        style={{ display: "inline" }}
                      >
                        <div className="tw-w-8 tw-h-8 tw-cursor-help tw-bg-purple-3 tw-flex tw-items-center tw-justify-center tw-rounded">
                          <span className="tw-text-sm tw-font-bold tw-text-white-1 tw-font-mono">
                            {sekund}
                          </span>
                        </div>
                      </div>
                      <div className="dddd_flex">
                        <div
                          className
                          data-tooltipped
                          aria-describedby="tippy-tooltip-23"
                          data-original-title="Hours"
                          style={{ display: "inline" }}
                        >
                          <div className="tw-w-8 tw-h-8 tw-cursor-help tw-bg-purple-3 tw-flex tw-items-center tw-justify-center tw-rounded">
                            <span className="tw-text-sm tw-font-bold tw-text-white-1 tw-font-mono">
                              03
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d_flex_text___">
                      <span className="spann">
                        MAX <b className="spann">5 TOKENS</b>
                      </span>
                      <b className="spann">•</b>
                      <span className="spann">
                        Price <b>2.50◎</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:tw-max-w-[50%] tw-flex tw-flex-col tw-items-center tw-w-full tw-flex-grow tw-self-stretch">
              <div className="overflow-hidden tw-w-full tw-mb-4 tw-flex-grow tw-rounded-3xl">
                <div>
                  <img
                    alt="..."
                    src={Gif}
                    className="tw-object-cover tw-aspect-square tw tw-w-screen tw-flex-grow tw-rounded-3xl overflow-hidden gif"
                  />
                  <img
                    alt="..."
                    // src="https://bafybeickbpg5rorsgxncosshr3gicib776imvitz35o2sozkr7qisvx4gm.ipfs.nftstorage.link/"
                    width={1}
                    height={1}
                    className="tw-absolute tw-invisible"
                  />
                </div>
              </div>
              <div className="tw-w-full">
                <div className="tw-flex tw-flex-col tw-gap-1 tw-flex-grow 3xl:tw-hidden">
                  <div className="tw-flex tw-items-center tw-justify-between tw-text-[14px] tw-text-gray-5">
                    <span className>Total minted</span>
                    <span>
                      <b className="tw-text-white-1">32%</b> (2256/7000)
                    </span>
                  </div>
                  <div className="progress-bar__container">
                    <div
                      className="progress-bar__value"
                      style={{ width: "32%" }}
                    />
                  </div>
                </div>
                <div className="tw-flex tw-gap-4 tw-items-center tw-justify-between tw-flex-wrap tw-rounded-lg tw-bg-purple-2 tw-p-4 tw-mt-4">
                  <div className="tw-flex tw-gap-4 tw-mx-auto tw-flex-col tw-w-full tw-items-center">
                    <div className="tw-flex tw-justify-between tw-gap-6 3xl:tw-w-full">
                      <button
                        onClick={() =>
                          navigate("/wallet-connect", { replace: "true" })
                        }
                        type="button"
                        className="tw-inline-flex tw-justify-center tw-items-center tw-rounded-md tw-text-white-1 PlainButton_btn__CRXH4 tw-h-auto tw-min-h-[44px] tw-font-semibold PlainButton_primary__22Ken"
                        style={{ width: 300 }}
                      >
                        Wallet connected
                      </button>
                      <div className="tw-flex tw-flex-col tw-gap-1 tw-flex-grow tw-hidden 3xl:tw-flex tw-flex-col-reverse tw-self-center">
                        <div className="tw-flex tw-items-center tw-justify-between tw-text-[14px] tw-text-gray-5">
                          <span className>Total minted</span>
                          <span>
                            <b className="tw-text-white-1">32%</b> (2256/7000)
                          </span>
                        </div>
                        <div className="progress-bar__container">
                          <div
                            className="progress-bar__value"
                            style={{ width: "32%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
